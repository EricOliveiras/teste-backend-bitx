import { Member } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { memberRepository } from '../repository/memberRepository';

export const readMember = async (id: string): Promise<Member> => {
  const member = await memberRepository.read(id);

  if (!member) {
    throw new HttpException(404, 'Member not found');
  }

  return member;
};
