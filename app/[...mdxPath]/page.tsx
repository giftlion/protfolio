import React from 'react'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

export default async function Page(props) {
  const params = await props.params
  const result = await importPage(params.mdxPath)
  const { default: MDXContent, toc, metadata } = result
  const components = useMDXComponents({})
  
  console.log(metadata)

  return (
    <components.wrapper toc={toc} metadata={metadata}>
      <MDXContent components={components} {...props} params={params} />
    </components.wrapper>
  )
}