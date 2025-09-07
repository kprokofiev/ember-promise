import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Это азартная игра?",
    answer: "Нет, это не азартная игра. В Sunset Ember нет пулов, призов или лотерей. Деньги списываются строго по вашему личному условию при невыполнении поставленной цели. Это инструмент самодисциплины, а не развлечение."
  },
  {
    question: "Что с чеками и фискализацией?",
    answer: "Каждый платёж фискализируется согласно 54-ФЗ через нашего платёжного провайдера. Вы получаете официальный чек на email или в Telegram после каждого списания."
  },
  {
    question: "Как обрабатываются персональные данные?",
    answer: "Мы работаем согласно 152-ФЗ: храним минимум данных, есть политика конфиденциальности и согласие на обработку. Вы можете запросить удаление своих данных в любой момент."
  },
  {
    question: "Можно ли отменить списание?",
    answer: "Да, можно отменить до дедлайна или в grace-окне (если настроено). Также есть система апелляций на 24 часа после списания для спорных случаев."
  },
  {
    question: "Куда идут мои деньги при провале?",
    answer: "Вы сами выбираете: благотворительный фонд, другу-антагонисту или комиссия сервиса. Все переводы прозрачные, с чеками и возможностью отслеживания."
  },
  {
    question: "Есть ли лимиты на списания?",
    answer: "Да, вы можете установить дневные и недельные лимиты. Также есть эскалация ставки с капом — повышение суммы за повторные провалы, но с максимальным порогом."
  }
];

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-hero">
            Частые вопросы
          </h2>
          <p className="text-text-dim text-lg">
            Всё честно и прозрачно — никаких подводных камней
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-ember border-none"
            >
              <AccordionTrigger className="text-left text-text-hero hover:text-ember-500 text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-dim leading-relaxed pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}