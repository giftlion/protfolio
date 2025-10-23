import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'
 
export async function getPosts() {
  try {
    const pageMap = await getPageMap();
    if (!pageMap) {
      console.warn('Page map is empty');
      return [];
    }

    const { directories = [] } = await normalizePages({
      list: pageMap,
      route: '/'
    });

    return directories
      .filter(post => {
        return post?.name !== 'index' && post?.name !== 'posts'
      })
      .sort((a, b) => {
        if (!a?.frontMatter?.date || !b?.frontMatter?.date) return 0;
        const dateA = new Date(a.frontMatter.date);
        const dateB = new Date(b.frontMatter.date);
        return dateB.getTime() - dateA.getTime();
      });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
 
export async function getTags(): Promise<string[]> {
  try {
    const posts = await getPosts()
    const tags = posts.flatMap(post => post?.frontMatter?.tags || [])
    return [...new Set(tags)].filter((tag): tag is string => typeof tag === 'string')
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}