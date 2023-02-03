import { body, param } from 'express-validator';
import { messages } from '../errorMessages';

export const taskValidator = {
  create: [
    body('title')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 5 }).withMessage(messages.length),

    body('description')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 5 }).withMessage(messages.length)
      .optional(),

    body('task_status')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 3 }).withMessage(messages.length)
      .optional(),

    body('expire__day')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isInt().withMessage(messages.intValue)
      .optional(),
  ],

  addMember: [
    body('name')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 5 }).withMessage(messages.length),

    body('email')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isEmail().withMessage(messages.email)
      .isLength({ min: 5 }).withMessage(messages.length),
  ],

  removeMember: [
    body('member_id')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
  ],

  update: [
    body('title')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 5 }).withMessage(messages.length)
      .optional(),

    body('description')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 5 }).withMessage(messages.length)
      .optional(),

    body('task_status')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue)
      .isLength({ min: 3 }).withMessage(messages.length)
      .optional(),

    body('expire__day')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isInt().withMessage(messages.intValue)
      .optional(),
  ],

  id: [
    param('id')
      .exists().withMessage(messages.required)
      .notEmpty().withMessage(messages.empty)
      .isString().withMessage(messages.stringValue),
  ]
};
