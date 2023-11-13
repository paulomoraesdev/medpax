'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { IconBrandWhatsapp, IconExternalLink, IconEye, IconGlobe, IconWorldShare } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function PartnersCard({ partner, index, notClickable = false }) {

  const logo = () => {
    if (partner.logotipo?.fields?.file?.url) {
      return <Image 
        className='mr-4'
        src={ `https:${partner.logotipo.fields.file.url}` }
        width={ 150 }
        height={ 150 }
      />
    }
    return null
  };

  return (
    <div index={ index } className="card shadow-xl p-3">
      <div className="card-body justify-between p-1">
        <div className='flex'>
          { logo() }
          <div className='flex flex-col justify-center flex-grow'>
            <h2 className="card-title">{ partner.name }</h2>
            {
              notClickable && partner.detalhes?.content?.length > 0 &&
              <div>
                <div className="divider"></div>
                <div className="text-sm font-medium text-gray-600">
                  { partner?.detalhes?.content && documentToReactComponents(partner.detalhes) }
                </div>
              </div>
            }
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
            {
              partner.website && notClickable &&
              <p className="text-sm font-medium text-gray-600">
                <strong>Website:</strong> 
                <a href={ partner.website } target='_blank' rel='noreferrer' className="link link-info ml-1">
                  Acessar o site do parceiro <IconExternalLink className='inline' size={ 18 } />
                </a>
              </p>
            }
            {
              partner.whatsapp && notClickable &&
              <p className="text-sm font-medium text-gray-600">
                <strong>Whatsapp:</strong> 
                <a href={ `https://wa.me/55${partner.whatsapp}` } target='_blank' rel='noreferrer' className="link link-success ml-1">
                  <IconBrandWhatsapp className='inline' size={ 18 } /> {partner.whatsapp}
                </a>
              </p>
            }
          </div>
        </div>
      </div>
      <div className="card-actions justify-center items-center my-2">
        {
          !notClickable && partner.assinante &&
          <Link 
            className="btn btn-outline btn-circle btn-sm"
            href={ `/parceiros/${ index }` }
          >
            <IconEye size={ 16 } />
          </Link>
        }
        {
          !notClickable && partner.website &&
          <Link 
            target='_blank'
            className="btn btn-outline btn-info btn-circle btn-sm"
            href={ partner.website }
          >
            <IconWorldShare size={ 16 } />
          </Link>
        }
        {
          !notClickable && partner.whatsapp &&
          <Link 
            target='_blank'
            className="btn btn-outline btn-success btn-circle btn-sm"
            href={ `https://wa.me/55${partner.whatsapp}` }
          >
            <IconBrandWhatsapp size={ 16 } />
          </Link>
        }
      </div>
    </div>
  )
}
