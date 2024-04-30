import { Variants, motion } from 'framer-motion';
import { JSONValue } from 'ai';
import { useMemo } from 'react';
import { Message } from 'ai/react';
import { convertMarkupToHTML } from '../utils';

interface IMessage {
  content: string;
  data: JSONValue | undefined;
  role: 'user' | 'assistant' | 'system' | 'data' | 'tool' | 'function';
}

export const MessageBubble = (props: IMessage) => {
  const { content, data, role } = props;

  const isHai = role === 'assistant';
  const isUser = role === 'user';

  const roleToColorMap: Record<Message['role'], string> = {
    system: 'red',
    user: 'slate',
    assistant: 'black',
    function: '',
    data: 'orange',
    tool: '',
  };

  const bodyText = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const bubbleVariants: Variants = {
    offscreen: {
      opacity: 0,
      scale: 0.7,
      y: 10,
      rotate: -2,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.4,
      },
    },
  };

  return (
    <div
      className={`whitespace-pre-wrap
    w-fit flex flex-col mb-4
    ${isHai && `max-w-[96%]`}
    ${isUser ? 'self-end' : 'self-start'}
    `}
    >
      <motion.div
        variants={bubbleVariants}
        whileInView="onscreen"
        initial={'offscreen'}
        viewport={{ once: false }}
        className={`whitespace-pre-wrap
          w-fit
          shadow-md
          ${isHai && `max-w-[96%]`}
          ${isUser ? 'self-end' : 'self-start'}
          ${!isUser ? 'bg-brand-300' : 'bg-brand-100'}
          rounded-lg 
          text-brand-dark-500
          ${isHai && 'rounded-bl-none'} ${isUser && 'rounded-br-none'} 
          p-3 md:p-4`}
        style={{ color: roleToColorMap[role] }}
      >
        {role !== 'data' && (
          <span
            dangerouslySetInnerHTML={{ __html: convertMarkupToHTML(content) }}
          />
        )}
        {role === 'data' && (
          <>
            {(data as any).description}
            <br />
            <pre className={'bg-gray-200'}>{bodyText}</pre>
          </>
        )}
      </motion.div>
      {/* <div
        className={`w-0 h-0 
        ${isUser ? 'self-end' : 'self-start'}
          border-l-[8px] border-l-transparent
          border-t-[12px] border-t-red-500
          border-r-[8px] border-r-transparent`}
      /> */}
    </div>
  );
};

export default MessageBubble;
