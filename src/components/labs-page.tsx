"use client";

import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/dialog';
import { PlusIcon } from 'lucide-react';

export default function LabsPage({ lab }: { lab: any }) {
  const gallery = () => {
    if (!lab.galeria?.length) return null;

    const items = lab.galeria.map((item: any) => {
      return {
        id: item.sys.id,
        description: "",
        title: item.fields.title ?? "",
        src: `https:${item.fields.file.url}`,
        content: () => {
          if (!item.fields.description) return;
          return (
            <p>
              { item.fields.description }
            </p>
          )
        }
      }
    });

    return (
      <section className="container mx-auto my-5">
        <h2 className="text-md font-bold uppercase my-5">Vitrine de produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            items?.map((item: any, index: number) => {
              return (
                <Dialog
                  key={ index }
                  transition={{
                    type: 'spring',
                    bounce: 0.05,
                    duration: 0.25,
                  }}
                >
                  <DialogTrigger
                    style={{
                      borderRadius: '12px',
                    }}
                    className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
                  >
                    <DialogImage
                      src={ item.src }
                      alt={ item.title }
                      className='h-48 w-full object-cover'
                    />
                    <div className='flex flex-grow flex-row items-end justify-between p-2'>
                      <div>
                        <DialogTitle className='text-zinc-950 dark:text-zinc-50'>
                          { item.title }
                        </DialogTitle>
                      </div>
                      <button
                        type='button'
                        className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                        aria-label='Open dialog'
                      >
                        <PlusIcon size={12} />
                      </button>
                    </div>
                  </DialogTrigger>
                  <DialogContainer>
                    <DialogContent
                      style={{
                        borderRadius: '24px',
                      }}
                      className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                    >
                      <DialogImage
                        src={ item.src }
                        alt={ item.title }
                        className='h-full w-full'
                      />
                      <div className='p-6'>
                        <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                          { item.title }
                        </DialogTitle>
                        <DialogDescription
                          disableLayoutAnimation
                          variants={{
                            initial: { opacity: 0, scale: 0.8, y: 100 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.8, y: 100 },
                          }}
                        >
                          <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                            { item.description }
                          </p>
                        </DialogDescription>
                      </div>
                      <DialogClose className='text-black' />
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
              )
            })
          }
        </div>
      </section>
    )
  }

  return (
    <React.Fragment>
      <section className="bg-gray-100 py-20">
        <header className="container mx-auto flex justify-between items-stretch">
          <section className="flex-grow flex flex-col">
            <h1 className="text-neutral-600 md:text-4xl mb-8 text-4xl font-bold leading-none tracking-tighter p-0 !m-0">{ lab.name }</h1>
            {
              lab.website && (
                <Link className="text-lime-500 underline" href={ lab.website } target="_blank"> { lab.website }</Link>
              )
            }
          </section>
          <aside className="text-right w-1/3 flex flex-col gap-2">
            {
              lab.localizacao && (
                <p><strong className="block text-xs">Endereço:</strong> { lab.localizacao }</p>
              )
            }
            {
              lab.phone && (
                <p><strong className="block text-xs">Telefone:</strong> { lab.phone }</p>
              )
            }
          </aside>
        </header>
      </section>
    </React.Fragment>
  )
}
