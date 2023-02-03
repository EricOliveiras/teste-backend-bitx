import { Member } from '@prisma/client';
import { HttpException } from '../../../errors/HttpException';
import { memberRepository } from '../repository/memberRepository';

export const createMember = async (name: string, email: string): Promise<Member> => {
  const member = await memberRepository.readByEmail(email);

  if (member) {
    throw new HttpException(409, 'Member already exist');
  }

  const memberCreated = await memberRepository.create({
    name,
    email
  });

  return memberCreated;
};
