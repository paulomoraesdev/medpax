import React from "react";

import getPage from '@/lib/repositories/pages'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Bold = ({ children }: { children: any}) => <span className="bold">{children}</span>;

const Text = ({ children }: { children: any}) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: unknown, children: any) => <Text>{children}</Text>,
  },
};

export const revalidate = 60

export default async function RegulamentoPage() {
  const page = await getPage('3NtHoHsCS41OKsrR4DCqUp');

  return (
    <div className="container mx:auto mt-5">
      <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter">
        Regulamento
      </h1>
      {
        page.fields?.content &&
        documentToReactComponents(page.fields.content)
      }
    </div>
  )
}