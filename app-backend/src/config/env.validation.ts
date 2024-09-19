import * as Joi from 'joi';

enum Environment {
  Development = 'development',
  Production = 'production',
}

const validateConfig = {
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid(Environment.Development, Environment.Production)
      .default(Environment.Development),
    PORT: Joi.number().port().required(),
    DB_URI: Joi.string().required(),
  }),
  validationOptions: {
    allowUnknown: true,
    abortEarly: false,
  },
};

export { validateConfig };
