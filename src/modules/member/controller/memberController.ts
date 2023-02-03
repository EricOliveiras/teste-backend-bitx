import { Request, Response } from 'express';
import { createMember } from '../service/createMember';
import { deleteMember } from '../service/deleteMember';
import { readAllMembers } from '../service/readAllMembers';
import { readMember } from '../service/readMember';
import { updateMember } from '../service/updateMember';

export const memberController = {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const member = await createMember(
      name,
      email
    );

    return res.status(201).json(member);
  },

  async read(req: Request, res: Response) {
    const { id } = req.params;

    const member = await readMember(id);

    return res.status(200).json(member);
  },

  async readAll(req: Request, res: Response) {
    const members = await readAllMembers();

    return res.status(200).json(members);
  },

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedMember = await updateMember(id, {
      name,
      email
    });

    return res.status(200).json(updatedMember);
  },

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await deleteMember(id);

    return res.sendStatus(200);
  },
};
