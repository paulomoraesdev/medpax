import getPage from "@/repository/pages";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

export const revalidate = 60;

export default async function Home() {
  const page = await getPage("1dGqcmZDfwUktCv2w2fxUn");

  return (
    <main>
      {page.fields?.content && documentToReactComponents(page.fields.content)}
    </main>
  );
}
