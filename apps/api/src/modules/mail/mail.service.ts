import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserEmailConfirmation({
    email,
    confirmationCode,
    redirectHost,
  }: {
    email: string;
    confirmationCode: string;
    redirectHost: string;
  }): Promise<void> {
    const url = `${redirectHost}/confirm?token=${confirmationCode}`;

    await this.mailerService.sendMail({
      to: email,
      from: '"Support Team" <support@ticketx.com>',
      subject: '登録ありがとうございます',
      template: './confirmation',
      context: {
        url,
      },
    });
  }
}
