import { Colors } from "@/common/themes/Color";
import { css } from '@emotion/react';
import { Stack } from '@mui/system';
import { Box } from '@mui/system';
import { QuestionsContent} from "./components";

export const QuestionsToAsk = () => {
    const model = {
        QuestionsText: {
            text1: 'Universal diplomatic culture',
            text2: 'Being a diplomat in the service of one`s country',
            text3: 'Self-identity',
            text4: 'National identity',
            text5: 'Other affiations(e.g. language, religion, gender)',
        },
        QuestionsProgress: {
            title: 'Questions To Ask',
            plain: [
                {
                    questions: 'Questions 1',
                    answer: 'Answer 1',
                },
                {
                    questions: 'Questions 2',
                    answer: 'Answer 2',
                },
                { questions: 'Questions 3', answer: 'Answer 3', },
            ],
            title2: 'Curriculum Connections',
            title2Sub1: 'Explore research-based practices in leadership, self-efficacy,\n and other non-cognitive areas of study that help young people\n develop the skills requisite for achieving high-impact outcomes.',
            title2Sub2: 'Grow your empathy gain the perspective of walking in the\n shoes of others as you survey the community around you for any\n areas of need.',
        },
    };
    return (
        <QuestionsContent
            text1={model.QuestionsText.text1}
            text2={model.QuestionsText.text2}
            text3={model.QuestionsText.text3}
            text4={model.QuestionsText.text4}
            text5={model.QuestionsText.text5}
            title={model.QuestionsProgress.title}
            plain={model.QuestionsProgress.plain}
            title2={model.QuestionsProgress.title2}
            title2Sub1={model.QuestionsProgress.title2Sub1}
            title2Sub2={model.QuestionsProgress.title2Sub2}
        />
    );
};

const sx = {

};
