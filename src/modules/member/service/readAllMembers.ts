import { Member } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { memberRepository } from '../repository/memberRepository';

export const readAllMembers = async (): Promise<Member[] | []> => {
  const members = await memberRepository.readAll();

  if (!members) {
    throw new HttpException(500, 'INTERNAL SERVER ERROR');
  }

  return members;
};
