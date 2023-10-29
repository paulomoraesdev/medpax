import getPage from '@/repository/pages'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import PartnersForm from '@/components/parceiros/PartnersForm';

const Bold = ({ children }) => <span className="bold">{children}</span>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

export const revalidate = 60

export default async function Companies() {
  const page = await getPage('4qQj5QI3ZQD1SnEWEut3ch')

  return (
    <main>
      <>
        {
          page.fields?.content &&
          documentToReactComponents(page.fields.content)
        }
        <div className="mt-5">
          <Link href="/regulamento" className="link link-primary">
            Conheça o regulamento
          </Link>
          <hr className="my-5" />
        </div>
        <PartnersForm />
      </>
    </main>
  )
}
