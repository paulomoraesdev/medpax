'use client'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';

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

export default function PartnersCard({ partner, index }) {

  const logo = () => {
    if (partner.logotipo?.fields?.file?.url) {
      return <Image 
        src={ `https:${partner.logotipo.fields.file.url}` }
        width={ 150 }
        height={ 150 }
      />
    }
    return null
  };

  return (
    <article className="card w-full bg-base-100 shadow-xl">
      <div className="card-body justify-between">
        <div className='flex'>
          { logo() }
          <div className='flex flex-col justify-center flex-grow'>
            <h2 className="card-title">{ partner.name }</h2>
            <div className="divider"></div>
            {
              partner.localizacao &&
              <p className="text-sm font-medium text-gray-600">
                <strong>Endereço:</strong> { partner.localizacao ?? ' ' }
              </p>
            }
            {
              partner.phone &&
              <p className="text-sm font-medium text-gray-600">
                <strong>Telefone:</strong> { partner.phone ?? ' ' }
              </p>
            }
          </div>
        </div>
      </div>
    </article>
  )
}
