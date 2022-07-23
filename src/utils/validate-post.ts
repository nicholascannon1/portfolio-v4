import Ajv, { JSONSchemaType } from 'ajv';

export type Frontmatter = {
    title: string;
    description: string;
    image: string;
    date: string;
    tags: string[];
};

const ajv = new Ajv({ allErrors: true });
const FrontmatterSchema: JSONSchemaType<Frontmatter> = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        image: { type: 'string' },
        date: { type: 'string' },
        tags: { type: 'array', minItems: 1, items: { type: 'string' } },
    },
    required: ['title', 'description', 'image', 'date', 'tags'],
};
const isValid = ajv.compile(FrontmatterSchema);

export const validateFrontmatter = (frontmatter: unknown): Frontmatter => {
    if (isValid(frontmatter)) {
        return frontmatter;
    }
    throw new Error(`Invalid frontmatter: ${isValid.errors}`);
};
