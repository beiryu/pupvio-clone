import { postAsync } from './postAsync';
import { SignInRequest } from '@/interfaces/auth/sign-in-request.interface';
import { UserWithCredential } from '@/interfaces/user/user-with-credential.interface';
import { SignUpRequest } from '@/interfaces/auth/sign-up-request.interface';
import { VerifyOtpRequest } from '@/interfaces/auth/verify-otp-request.interface';
import { SendOtpRequest } from '@/interfaces/auth/send-otp-request.interface';
import { ResetPasswordRequest } from '@/interfaces/auth/request-password-request.interface';
import { ResetPasswordCode } from '@/interfaces/auth/reset-password-code.interface';
import { ChangePassword } from '@/interfaces/auth/change-password.interface';
import { User } from '@/interfaces/user/user.interface';
import { getAsync } from './getAsync';

class AuthenticationService {
  private readonly prefix = 'auth';

  public async signIn(model: SignInRequest): Promise<UserWithCredential> {
    try {
      const response = await postAsync(`${this.prefix}/sign-in`, model);
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async signUp(model: SignUpRequest): Promise<UserWithCredential> {
    try {
      const response = await postAsync(`${this.prefix}/sign-up`, model);
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async verifyOtp(model: VerifyOtpRequest): Promise<boolean> {
    try {
      const response = await postAsync(`${this.prefix}/verify-otp`, model);
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async sendOtp(model: SendOtpRequest): Promise<boolean> {
    try {
      const response = await postAsync(`${this.prefix}/send-otp`, model);
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async requestChangePassword(
    model: ResetPasswordRequest,
  ): Promise<boolean> {
    try {
      const response = await postAsync(
        `${this.prefix}/request-change-password`,
        model,
      );
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async verifyResetPasswordCode(
    model: ResetPasswordCode,
  ): Promise<boolean> {
    try {
      const response = await postAsync(
        `${this.prefix}/verify-reset-password-code`,
        model,
      );
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async changePassword(model: ChangePassword): Promise<boolean> {
    try {
      const response = await postAsync(`${this.prefix}/change-password`, model);
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }

  public async getCurrentUser(): Promise<User> {
    try {
      const response = await getAsync(`${this.prefix}/me`);
      return response?.content;
    } catch (error: any) {
      throw error;
    }
  }
}

const authenticationService = new AuthenticationService();
export default authenticationService;
