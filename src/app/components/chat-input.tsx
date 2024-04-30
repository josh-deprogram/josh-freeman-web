/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Message, useAssistant } from 'ai/react';
import { motion } from 'framer-motion';
import MessageBubble from './message-bubble';
import MessageLoader from './message-loader';
import LinkCard from './link-card';

interface IChat {
  welcomeMsg?: string;
  personaId: string;
  username?: string;
  centered?: boolean;
}

export default function ChatInput(props: IChat) {
  const { welcomeMsg, username, centered = true } = props;
  const [productInput, setProductInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: '/api/assistant',
      body: { personaId: props.personaId },
    });

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setIsLoading(true);
    console.log('productInput', productInput);
    const response = await fetch('/api/gpt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product: productInput }),
    });
    const { status, messages, input, submitMessage, handleInputChange, error } =
      useAssistant({
        api: '/api/assistant',
      });
  }

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === 'awaiting_message' && messages.length > 0) {
      inputRef.current?.focus();
    }
    if (status === 'in_progress') {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [status]);

  useEffect(() => {
    if (messages.length > 2) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [messages]);

  const showCustomItem = (message: string) => {
    if (message.includes('www.deprogram.io')) {
      return (
        <LinkCard title={'www.deprogram.io'} url={'https://deprogram.io'} />
      );
    }
    return <></>;
  };

  return (
    <div
      className={`flex flex-col justify-start w-full mx-auto pb-4 md:pb-1 max-w-[600px] `}
    >
      {error != null && (
        <div className="relative bg-red-500 text-white px-6 py-4 rounded-md mb-4">
          <span className="block sm:inline">
            😭 {(error as any).toString()} 💔{' '}
          </span>
        </div>
      )}

      {welcomeMsg && (
        <MessageBubble content={welcomeMsg} data={null} role={'assistant'} />
      )}

      {messages.map((m: Message) => {
        console.log('MEssage', m);
        if (!m.id) return null;
        return (
          <>
            <MessageBubble
              key={m.id}
              content={m.content}
              data={m.data}
              role={m.role}
            />
            {showCustomItem(m.content)}
          </>
        );
      })}

      {/* <Carousel title="Project images" images={[]} /> */}

      {status === 'in_progress' && <MessageLoader />}

      <motion.div className="">
        <form
          onSubmit={submitMessage}
          className={`px-3 pt-3
          flex flex-row md:pt-5`}
        >
          <div className={`relative w-full flex flex-row justify-center`}>
            <input
              ref={inputRef}
              disabled={status !== 'awaiting_message'}
              className="bottom-0 w-full  p-2 pr-14 pl-5 border-2
              bg-brand-dark-400
              transition-colors
               outline-none  border-brand-dark-300 focus:border-brand-100 h-[48px] md:h-[50px] lg:h-[60px] 
               rounded-[32px] shadow-xl text-brand-dark-100"
              value={input}
              placeholder={`Chat with ${username || 'Josh (persona)'}...`}
              onChange={handleInputChange}
              autoFocus={false}
            />
            <button
              className="bg-brand-300  text-white p-2 ml-3 w-[40px] h-[40px] rounded-full
          justify-center content-center flex flex-row items-center transition-colors
          absolute right-[4px] top-[4px] md:right-[5px] md:top-[5px] lg:right-[8px] lg:top-[10px]
          hover:bg-brand-600"
              type="submit"
            >
              <Image
                priority
                src={'/images/arrow-dark.svg'}
                width={20}
                height={24}
                alt="Chat with Josh (persona)"
              />
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
