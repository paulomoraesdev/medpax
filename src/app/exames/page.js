import getPage from '@/repository/pages'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

export default async function Exams() {
  const page = await getPage('2rwFTLuqKthg3JEn5b4VCv')

  return (
    <main>
      {
        page.fields?.content &&
        documentToReactComponents(page.fields.content)
      }
    </main>
  )
}
