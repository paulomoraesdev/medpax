'use client'

import { IconEye } from '@tabler/icons-react'
import { useContext } from 'react'
import { ProfessionalContext } from '@/providers/ProfessionalProvider'
import Link from 'next/link'

export default function ProfessionalCard({ professional, index, notClickable = false }) {
  const btn = () => {
    if (professional.linkkiwim) return {
      url: professional.linkkiwim,
      label: `Agendar online`
    }
    else if (professional.whatsapp) return {
      url: `https://wa.me/55${professional.whatsapp}?text=Olá,%20estou%20pelo%20site%20da%20Medpax%20e%20gostaria%20de%20agendar%20um%20horário`,
      label: `WhatsApp do profissional`
    }
    else return {
      url: `https://wa.me/5514996767312?text=Olá,%20estou%20pelo%20site%20da%20Medpax%20e%20gostaria%20de%20agendar%20um%20horário%20com%20${professional.name}`,
      label: `Solicitar agendamento`
    }
  }

  return (
    <div index={ index }>
      <div className="card-body justify-between shadow-lg">
        <h2 className="card-title">{ professional.name }</h2>
        { 
          professional.specialties?.length > 0 &&
          <div className="flex gap-4">
            { professional.specialties?.map((specialty, index) => (<div className="badge badge-ghost" key={ index }>{specialty.fields?.title}</div>)) }
          </div>
        }
        <div className="divider"></div>
        {
          professional.localizacao &&
          <p className="text-sm font-medium text-gray-600">
            <strong>Endereço:</strong> { professional.localizacao ?? ' ' }
          </p>
        }
        {
          professional.phone &&
          <p className="text-sm font-medium text-gray-600">
            <strong>Telefone:</strong> { professional.phone ?? ' ' }
          </p>
        }
        <div className="card-actions justify-end mt-4 items-center">
          {
            professional.amount &&
            <p className="text-sm font-medium text-gray-400">
              { professional.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) ?? ' ' }
            </p>
          }
          {
            !notClickable && professional.assinante &&
            <Link 
              className="btn btn-outline btn-success btn-xs"
              href={ `/profissionais/${ index }` }
            >
              <IconEye />
            </Link>
          }
          <a 
            href={ btn().url } 
            target="_blank"
            className="btn btn-outline btn-success btn-xs"
          >
            { btn().label }
          </a>
        </div>
      </div>
    </div>
  )
}
