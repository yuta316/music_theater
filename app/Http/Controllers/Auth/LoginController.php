<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Auth;
use Socialite;
use App\User;
use App\IdentityProvider;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    // ユーザーをOAuthプロバイダーに送信するメソッド
    public function redirectToProvider($social)
    {
        return Socialite::driver($social)->redirect()->getTargetUrl();
    }

    // プロバイダーからユーザーの情報を取得
    public function handleProviderCallback($provider)
    {
        try {
            $user = Socialite::driver($provider)->user();
        } catch (Exception $e) {
            return redirect('/login');
        }

        $authUser = $this->findOrCreateUser($user, $provider);
        Auth::login($authUser, true);
    }

    // Userがなければ登録する
    public function findOrCreateUser($providerUser, $provider)
    {
        $account = IdentityProvider::whereProviderName($provider)
                    ->whereProviderId($providerUser->getId())
                    ->first();

        if ($account) {
            return $account->user;
        } else {
            $user = User::whereEmail($providerUser->getEmail())->first();

            if (!$user) {
                $user = User::create([
                    'email' => $providerUser->getEmail(),
                    'name'  => $providerUser->getName(),
                ]);
            }

            $user->IdentityProviders()->create([
                'provider_id'   => $providerUser->getId(),
                'provider_name' => $provider,
            ]);

            return $user;
        }
    }
}
