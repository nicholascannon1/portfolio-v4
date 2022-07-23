---
title: 'Test Post'
description: 'Testing out md posts'
image: imgs/posts/test-post.avif
date: '2022-06-16'
tags:
    - test
    - blog
---

# Test Post

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsam tenetur tempora ut reiciendis ullam quaerat nobis accusantium, nesciunt enim. Aperiam quo perferendis impedit. Impedit aspernatur assumenda doloribus suscipit temporibus unde eum tenetur sint, voluptas numquam est vel reprehenderit, facere pariatur minus perferendis saepe hic itaque ut. Ipsum, eaque animi.

## My test list

Look at my cool list:

-   A
-   B
-   B

Now this:

1. Go here
2. Do that
3. Run this

nicholascannon.com

## Code snippet

```javascript
console.log('hello, world');

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
    const slug = params?.slug;
    if (slug === undefined) {
        throw new Error(`Post page has no slug value in getStaticProps params: ${params}`);
    }

    const post = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data, content } = matter(post);

    const frontmatter = validateFrontmatter(data);

    return {
        props: {
            content,
            frontmatter,
        },
    };
};
```

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsam tenetur tempora ut reiciendis ullam quaerat nobis accusantium, nesciunt enim. Aperiam quo perferendis impedit. Impedit aspernatur assumenda doloribus suscipit temporibus unde eum tenetur sint, voluptas numquam est vel reprehenderit, facere pariatur minus perferendis saepe hic itaque ut. Ipsum, eaque animi.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ipsam tenetur tempora ut reiciendis ullam quaerat nobis accusantium, nesciunt enim. Aperiam quo perferendis impedit. Impedit aspernatur assumenda doloribus suscipit temporibus unde eum tenetur sint, voluptas numquam est vel reprehenderit, facere pariatur minus perferendis saepe hic itaque ut. Ipsum, eaque animi.
