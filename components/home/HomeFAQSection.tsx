import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: '다른 병원이랑 홈페이지가 똑같지는 않나요?',
    answer:
      '걱정하지 않으셔도 됩니다. 플러피는 하나의 템플릿을 하나의 병원에만 제공합니다. 한 번 사용된 템플릿은 다른 병원에 다시 판매하지 않습니다.',
  },
  {
    question: '홈페이지는 얼마나 걸려서 받을 수 있나요?',
    answer:
      '자료가 준비되면 약 4주 안에 제작됩니다. 추가 기능이나 기존 홈페이지 이전이 필요한 경우에는 일정이 조금 더 소요될 수 있습니다.',
  },
  {
    question: '홈페이지를 제가 직접 수정할 수 있나요?',
    answer:
      '네. 관리자 페이지를 제공해 드리기 때문에 의료진, 시술, 이벤트, 공지사항 등 필요한 내용을 직접 수정하실 수 있습니다.',
  },
  {
    question: '제작이 끝난 후에도 계속 관리해 주시나요?',
    answer:
      '물론입니다. 오픈 이후에도 유지보수, 보안 업데이트, 버그 수정, 기능 개선까지 지속적으로 지원해드립니다.',
  },
  {
    question: '템플릿 말고 원하는 디자인으로도 만들 수 있나요?',
    answer:
      '가능합니다. 병원의 브랜드에 맞춘 디자인이나 특별한 기능이 필요하다면 처음부터 맞춤 제작해드립니다.',
  },
];

export function HomeFAQSection() {
  return (
    <section className="relative isolate overflow-hidden bg-neutral-50 py-24 md:py-32">
      <div className="site-width">
        <h2 className="section-title">FAQ</h2>

        <Accordion
          type="single"
          defaultValue="faq-0"
          collapsible
          className="mt-6 border-y"
        >
          {faqItems.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`faq-${index}`}>
              <AccordionTrigger>
                <span>Q. {question}</span>
              </AccordionTrigger>
              <AccordionContent>
                <p>{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
