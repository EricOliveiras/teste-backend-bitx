import { prisma as db } from '../../../libs/prisma';
import { IMember, IMemberUpdate } from '../../../types/IMember';
import { Member } from '.prisma/client';

export const memberRepository = {
  async create({ name, email }: IMember): Promise<Member> {
    const member = await db.member.create({
      data: {
        name,
        email
      },
    });

    return member;
  },

  async read(id: string): Promise<Member | null> {
    const member = await db.member.findUnique({
      where: { id },
    });

    return member;
  },


  async readByEmail(email: string): Promise<Member | null> {
    const member = await db.member.findUnique({
      where: { email },
    });

    return member;
  },


  async readAll(): Promise<Member[] | null> {
    const members = await db.member.findMany();

    return members;
  },

  async checkTaskInMember(email: string, task_id: string): Promise<Member | null> {
    const member = await db.member.findFirst({
      where: {
        AND: [
          {
            email: email
          },
          {
            task: {
              has: task_id
            }
          }
        ]
      }
    });

    return member;
  },

  async addTask(id: string, task_id: string): Promise<Member> {
    const member = await db.member.update({
      where: { id },
      data: {
        task: {
          push: task_id
        }
      }
    });

    return member;
  },

  async removeTask(id: string, task_id: string[] | string | []): Promise<Member> {
    const member = await db.member.update({
      where: { id },
      data: {
        task: {
          set: task_id
        }
      }
    });

    return member;
  },

  async update(id: string, data: IMemberUpdate): Promise<Member> {
    const member = await db.member.update({
      where: { id },
      data: data,
    });

    return member;
  },

  async delete(id: string): Promise<void> {
    await db.member.delete({
      where: { id },
    });
  },
};
