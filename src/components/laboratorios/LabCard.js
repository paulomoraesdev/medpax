'use client'

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Link from 'next/link';
import { IconBrandWhatsapp, IconEye, IconWorldShare } from '@tabler/icons-react';

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

export default function LabCard({ lab, index, notClickable = false }) {
  const showModal = () => {
    const el = document.querySelector(`#modal-${ index }`)
    el && el.showModal()
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body justify-between">
        <h2 className="card-title">{ lab.name }</h2>
        <div className="divider"></div>
        {
          lab.localizacao &&
          <p className="text-sm font-medium text-gray-600">
            <strong>Endereço:</strong> { lab.localizacao ?? ' ' }
          </p>
        }
        {
          lab.phone &&
          <p className="text-sm font-medium text-gray-600">
            <strong>Telefone:</strong> { lab.phone ?? ' ' }
          </p>
        }
        <div className="card-actions justify-end mt-4 items-center">
          {
            !notClickable && lab.assinante &&
            <Link 
              className="btn btn-outline btn-circle btn-sm"
              href={ `/laboratorios/${ index }` }
            >
              <IconEye size={ 16 } />
            </Link>
          }
          {
            lab.website &&
            <Link 
              target='_blank'
              className="btn btn-outline btn-info btn-circle btn-sm"
              href={ lab.website }
            >
              <IconWorldShare size={ 16 } />
            </Link>
          }
          {
            lab.whatsapp &&
            <Link 
              target='_blank'
              className="btn btn-outline btn-success btn-circle btn-sm"
              href={ `https://wa.me/55${lab.whatsapp}` }
            >
              <IconBrandWhatsapp size={ 16 } />
            </Link>
          }
          {
            notClickable && lab.detalhes &&
            <button className="btn btn-outline btn-info btn-sm" onClick={ showModal }>
              Exames Disponíveis
            </button>
          }
        </div>
        {
          lab.detalhes?.content?.length > 0 &&
          <dialog id={ `modal-${ index }` } className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Exames Disponíveis:</h3>
              <div className="py-4">
                { lab?.detalhes?.content && documentToReactComponents(lab.detalhes) }
              </div>
              <form method="dialog" className='flex justify-center py-5'>
                <button className="btn btn-sm btn-ghost">Fechar</button>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button></button>
            </form>
          </dialog>
        }
      </div>
    </div>
  )
}
