import axios from 'axios'

import { getCsrfCookie } from './get-csrf-cookie'

import { QuizzesData, QuizzesQuestion, OptionTypes, Parent } from '../../models/heartscore-quizzes'
import { Results } from '../../models/result-type'

const mapOptions = (options: string[]) => {
  return (
    options &&
    options.map((option, index) => {
      return { value: index, label: option }
    })
  )
}

const mapQuestion = (name: string, type: OptionTypes, question: string | undefined, options?: string[], isRequired: boolean = true, parent?: Parent<string>) => {
  return { name, type, question, options: options ? mapOptions(options) : undefined, isRequired, parent }
}

const answerOptionsType1: string[] = ['5 or more servings', '2-4 servings', '0-1 servings']
const answerOptionsType2: string[] = ['Not at all', 'Several days', 'More days than not', 'Nearly everyday']

const dummyDataQuizzes: QuizzesData[] = [
  {
    introduction: {
      title: 'Tell Us about Yourself: ',
      description: `
        Who are you? These factors help us understand a bit about your life. It is also important for us to understand your genetics and ethnicity.  
        <br /><br />Your ethnic background matters. Black women have the highest prevalence of heart disease, with 50% of Black women having some form of heart diseases by age 20. South Asian women, including women from Indian and Filipino descent, also have an increased risk of heart disease. We need to know to understand who you are a bit better!       
    `,
    },
    titleProgess: "1. Let's start with the basic:",
    questions: [
      mapQuestion('q_101', OptionTypes.InputNumber, 'What is your current age?'),
      mapQuestion('q_102', OptionTypes.RadioSquare, 'What is your marital status?', ['Single', 'Partnered', 'Divorced', 'Widowed']),
      mapQuestion('q_103', OptionTypes.Radio, 'Caretaker:', ['Yes', 'No']),
      mapQuestion('q_104', OptionTypes.RadioSquare, undefined, ['Parent', 'Children', 'Other'], false, { name: 'q_103', value: '0' }),
      mapQuestion('q_105', OptionTypes.RadioSquare, 'Gender at birth:', ['Female', 'Male', 'Other']),
      mapQuestion('q_106', OptionTypes.RadioSquare, 'What is your ethnicity:', ['White', 'Black', 'Hispanic', 'Native American', 'Asian', 'South Asia', 'Pacific Islander']),
    ],
  },
  {
    introduction: {
      title: 'Lifestyle Choices and How You Live Your Days: ',
      description: `
        Heart health is based on many risk factors. 80% of the time heart disease is preventable based on your lifestyle choices. How you eat, how you move, how you sleep and how you manage stress are some of the critical factors of a healthy lifestyle.  
        <br /><br />These are the ones we can control. Let’s see where you are today, before we start on this wellness journey together. 
    `,
    },
    titleProgess: 'What is your smoking history?',
    questions: [
      mapQuestion('q_201', OptionTypes.Radio, 'Do you smoke?', ['Yes', 'No']),
      mapQuestion('q_202', OptionTypes.InputNumber, 'How many packs a day?', undefined, false, { name: 'q_201', value: '0' }),
      mapQuestion('q_203', OptionTypes.InputNumber, 'How many years?', undefined, false, { name: 'q_201', value: '0' }),
      mapQuestion('q_204', OptionTypes.RadioSquare, 'Can told calculate pk/yr?', ['<20pk/yr', '>20pk/yr', '>50pk/yr'], false, { name: 'q_201', value: '0' }),
      mapQuestion('q_205', OptionTypes.Radio, 'Have you smoked in the last 12 months?', ['Yes', 'No'], false, { name: 'q_201', value: '0' }),
      mapQuestion('q_206', OptionTypes.Radio, 'Are you taking oral contraceptives?', ['Yes', 'No'], false, { name: 'q_201', value: '0' }),
      mapQuestion('q_207', OptionTypes.Radio, 'Vaping?', ['Yes', 'No']),
      mapQuestion('q_208', OptionTypes.RadioSquare, 'Drinking: Beer = 12oz; Wine = 5oz; Spirits = 1.5oz.', [
        'Less than 7 drinks a week',
        '7 - 14 drinks a week',
        '> 14 drinks/week',
        'Greater than 5 drinks at one sitting.',
      ]),
      mapQuestion('q_209', OptionTypes.InputNumber, 'Overweight/Obesity: <br><br>Height'),
      mapQuestion('q_210', OptionTypes.InputNumber, 'Weight'),
      mapQuestion('q_211', OptionTypes.RadioSquare, 'BMI', ['<25 (normal)', '25-29.9(overweight)', '> 30 (obese)']),
      mapQuestion('q_212', OptionTypes.RadioSquare, 'Pant waist size', ['< 35 inches', '>=35 inches']),
      {
        question: '<span class="text-[27px]">Exercise:<span>',
        name: 'q_213',
        type: OptionTypes.RadioSquare,
        exampleName: 'INTENSITY',
        options: [
          {
            value: 1,
            label: 'Sedentary behavior',
            example: 'Sitting, reclining or lying; watching TV',
          },
          {
            value: 2,
            label: 'Light',
            example: 'Walking slowly, cooking, light housework',
          },
          {
            value: 3,
            label: 'Moderate',
            example: 'Brisk walking (2.4-4mph), biking (5-9mph), ballroom dancing, active yoga,',
          },
          {
            value: 4,
            label: 'Vigorous',
            example: 'Jogging/running, biking (>10mph), singles tennis, ',
          },
        ],
      },
      mapQuestion('q_214', OptionTypes.RadioSquare, 'If you exercise regularly is it:', [
        'At least 75mins/week vigorous physical activity or 150mins/week of moderately intense physical activity each week ',
        'Less than 75mins/week vigorous physical activity or 150mins/week of moderately intense physical activity each week ',
        'High intensity workouts >5hours/week',
      ]),
      mapQuestion('q_215', OptionTypes.Radio, 'Do you use a device to track your heart rate +/ activity?', ['Yes', 'No']),
      mapQuestion('q_216', OptionTypes.Input, 'Which device?', undefined, false, { name: 'q_215', value: '0' }),
      mapQuestion('q_217', OptionTypes.RadioSquare, '<span class="text-[27px]">Diet:</span><br><br>Servings of fruits and vegetables/day:', answerOptionsType1),
      mapQuestion(
        'q_218',
        OptionTypes.RadioSquare,
        'Servings of saturated (animal) fats/day (not including low fat dairy, white and skinless turkey and skinless chicken or fish)/day: "',
        answerOptionsType1
      ),
      mapQuestion('q_219', OptionTypes.RadioSquare, 'Whole grains/day:  (recommended = 3oz/day and 1oz = 1 serving)', answerOptionsType1),
      mapQuestion('q_220', OptionTypes.RadioSquare, 'Fast Food/day:', answerOptionsType1),
      mapQuestion('q_221', OptionTypes.RadioSquare, 'High salt/processed foods/day:', answerOptionsType1),
      mapQuestion('q_222', OptionTypes.RadioSquare, 'High sugar food/day:', answerOptionsType1),
      mapQuestion('q_223', OptionTypes.Radio, 'Do you drink Soda?', ['Yes', 'No']),
      mapQuestion('q_224', OptionTypes.Radio, 'Do you use Olive Oil instead of butter or high calorie dressing?', ['Yes', 'No']),
      mapQuestion('q_225', OptionTypes.Radio, 'Do you eat nuts instead of other high calorie salty snacks?', ['Yes', 'No']),
      mapQuestion('q_226', OptionTypes.RadioSquare, '<span class="text-[27px]">Sleep:</span><br><br>On average how many hours of sleep do you get each night:', [
        '<7 hours/night.',
        '7-9 hours/night.',
        '>9 hours/night.',
      ]),
    ],
  },
  {
    introduction: {
      title: 'Your Feelings and Mental Health: ',
      description: `Stress is just a part of our lives, but how we respond to it matters. Chronic stress or intense stress over time can really affect our hearts and our health. Depression is twice as common in women, and those with depression are at an increased risk for heart disease, 2-3x greater than women who are not depressed. The most important thing is knowing how you feel and understanding how to manage it.`,
    },
    questions: [
      mapQuestion('q_301', OptionTypes.Checkbox, 'Do you have previous mental health history?', ['History of Depression.', 'History of Anxiety.']),
      mapQuestion('q_302', OptionTypes.RadioSquare, 'Feeling nervous, anxious or on edge.', answerOptionsType2),
      mapQuestion('q_303', OptionTypes.RadioSquare, 'Not been able to stop or control worrying.', answerOptionsType2),
      mapQuestion('q_304', OptionTypes.RadioSquare, 'Feeling down, depressed or hopeless.', answerOptionsType2),
      mapQuestion('q_305', OptionTypes.RadioSquare, 'Little interest or pleasure in doing things.', answerOptionsType2),
      mapQuestion('q_306', OptionTypes.RadioSquare, 'Do you take measures to address your mental health.', answerOptionsType2),
      mapQuestion('q_307', OptionTypes.Radio, 'Do you take measures to address your mental health?', ['Yes', 'No']),
      mapQuestion('q_308', OptionTypes.RadioSquare, 'If yes, what do you do?', ['Medication', 'Therapy', 'Exercise', 'Meditation', 'Yoga', 'Other'], false, { name: 'q_307', value: '0' }),
    ],
  },
  {
    introduction: {
      title: 'Food Insecurity',
      description: 'Need Copy',
    },
    questions: [
      mapQuestion('q_401', OptionTypes.Radio, 'During the last 12 months, was there a time when, because of lack of money or other resources?', ['Yes', 'No']),
      mapQuestion('q_402', OptionTypes.Radio, 'You were worried you would not have enough food to eat?', ['Yes', 'No']),
      mapQuestion('q_403', OptionTypes.Radio, 'You or other family members had to skip a meal?', ['Yes', 'No']),
      mapQuestion('q_404', OptionTypes.Radio, 'Your household ran out of food?', ['Yes', 'No']),
      mapQuestion('q_405', OptionTypes.Radio, 'You could not afford to eat a balanced diet?', ['Yes', 'No']),
      mapQuestion('q_406', OptionTypes.Radio, '<span class="text-[27px]">Financial Insecurity:</span><br><br> I could handle a major unexpected expense', ['Yes', 'No']),
      mapQuestion('q_407', OptionTypes.Radio, 'I have money left at the end of the month.', ['Yes', 'No']),
      mapQuestion('q_408', OptionTypes.Radio, 'I am behind with my finances.', ['Yes', 'No']),
      mapQuestion('q_409', OptionTypes.Radio, 'I can enjoy life because of the way I am managing my money.', ['Yes', 'No']),
    ],
  },
  {
    introduction: {
      title: 'Job Satisfaction',
      description: `Need Copy`,
    },
    titleProgess: 'Job Satisfaction:',
    questions: [
      mapQuestion('q_501', OptionTypes.Radio, 'Do you feel appreciated at work?', ['Yes', 'No']),
      mapQuestion('q_502', OptionTypes.Radio, 'Do you work after ordinary working hours to finish your assignments?', ['Yes', 'No']),
      mapQuestion('q_503', OptionTypes.Radio, 'Do you find it hard to sleep because your mind is occupied with work?', ['Yes', 'No']),
      mapQuestion('q_504', OptionTypes.Radio, 'Because of work, do you find it hard to find time to be with family/friends or enjoy activities outside of work?', ['Yes', 'No']),
      mapQuestion('q_505', OptionTypes.Radio, '<span class="text-[27px]">Joy/Purpose:</span><br><br> In the past month did you: <br><br>Feel you were enjoying life?', ['Yes', 'No']),
      mapQuestion('q_506', OptionTypes.Radio, 'Feel like everything was an effort?', ['Yes', 'No']),
      mapQuestion('q_507', OptionTypes.Radio, 'Feel that most of what you do is trivial and unimportant?', ['Yes', 'No']),
      mapQuestion('q_508', OptionTypes.Radio, 'Feel confident that you have discovered a satisfying purpose for your life?', ['Yes', 'No']),
    ],
  },
  {
    introduction: {
      title: 'Past Medical History',
      description: `If you have had any issues with your heart in the past, or any evidence of heart disease by screening tests, then you are at greater risk of having a problem again. Most importantly, we need to know how you FEEL!  When you are trying to do “you,” it’s important to pay attention to how you are feeling while getting through your days. How you feel means more than you think!`,
    },
    questions: [
      mapQuestion('q_601', OptionTypes.Checkbox, 'Past Heart History:  (check all that apply):', [
        'Heart Attack',
        'Stroke/TIA',
        'Stent/PTCA',
        'Coronary Artery Bypass Grafting (CABG):',
        'Peripheral Vascular Disease',
        'Aortic Aneurysm',
        'History of Covid-19',
      ]),
      mapQuestion('q_602', OptionTypes.Radio, 'Do you know your test numbers? Enter them if you know them.', ['Yes', 'No']),
      mapQuestion('q_603', OptionTypes.RadioSquare, 'Carotid artery dopplers', ['Normal', 'Carotid intima-medial thickness (CIMT)', '25-49%', '50-69%', '>70%'], false, { name: 'q_602', value: '0' }),
      mapQuestion('q_604', OptionTypes.RadioSquare, 'Elevated Calcium Score:', ['0-10 (min)', '11-100 (mild)', '101 – 400 (moderate)', '>400 (severe)'], false, { name: 'q_602', value: '0' }),
      mapQuestion('q_605', OptionTypes.RadioSquare, 'Other past medical history:', ['Diabetes', 'Elevated sugar', 'High cholesterol'], false, { name: 'q_602', value: '0' }),
      mapQuestion('q_606', OptionTypes.Radio, 'Do you know your lab numbers. Enter them if you know them.', ['Yes', 'No']),
      mapQuestion('q_607', OptionTypes.RadioSquare, 'Cholesterol___', ['<200', '200-239', '>240'], false, { name: 'q_606', value: '0' }),
      mapQuestion('q_608', OptionTypes.RadioSquare, 'LDL___', ['<100', '101-130'], false, { name: 'q_606', value: '0' }),
      mapQuestion('q_609', OptionTypes.RadioSquare, 'HDL___', ['<50', '51-60', '>61'], false, { name: 'q_606', value: '0' }),
      mapQuestion('q_610', OptionTypes.RadioSquare, 'Triglycerides___', ['<150', '151-199', '200-499', '>500'], false, { name: 'q_606', value: '0' }),
      mapQuestion('q_611', OptionTypes.RadioSquare, 'Lp(a)___', ['<30', '31-50', '>50'], false, { name: 'q_606', value: '0' }),
      mapQuestion('q_612', OptionTypes.Radio, 'Do you have Elevated Sugars?', ['Yes', 'No']),
      mapQuestion('q_613', OptionTypes.RadioSquare, 'HBA1C:___', ['<5.7', '5.7-6.4', '>6.5'], false, { name: 'q_612', value: '0' }),
      mapQuestion('q_614', OptionTypes.RadioSquare, 'High blood pressure<br><br>Do you know your numbers?"', ['<120/80', '>120/80', '>140/85', '>160/90']),
      mapQuestion('q_615', OptionTypes.Radio, 'Do you have sleep apnea?', ['Yes', 'No']),
      mapQuestion('q_616', OptionTypes.Radio, 'Do you have kidney disease?', ['Yes', 'No']),
      mapQuestion('q_617', OptionTypes.Radio, 'Do you have an autoimmune disease?', ['Yes', 'No']),
      mapQuestion('q_618', OptionTypes.Radio, 'Are you on Prednisone?', ['Yes', 'No']),
      mapQuestion('q_619', OptionTypes.Input, 'What type___', undefined, false, { name: 'q_618', value: '0' }),
      mapQuestion('q_620', OptionTypes.Checkbox, 'Are you on medications? Check all those that apply to you:', [
        'None',
        'Diabetes',
        'Insulin',
        'High sugars',
        'Blood pressure',
        'Cholesterol',
        'Aspirin',
      ]),
    ],
  },
  {
    introduction: {
      title: 'Heart History',
      description: `It matters most if you have any symptoms when you are just going about your life and getting through your days.  Sometimes we don’t even pay attention to how we feel. Let’s just take a moment to reflect on that. Think about how you have been feeling and if your body might be trying to tell you something. Sometimes we just need to listen!`,
    },
    questions: [
      mapQuestion('q_701', OptionTypes.Checkbox, 'Read the list below and check any symptoms you have felt in the last 3-6 months:', [
        'Chest pain/pressure/tightness',
        'Chest discomfort',
        'Radiation of pain to shoulder, neck, jaw or back',
        'Shortness of breath',
        'Palpitations or pounding heart',
        'Unable to walk a block without stopping',
        'Unable to walk 2 flights of stairs/uphill',
        'Unable to run short distances',
        'Inability to do moderate recreational activity due to fatigue',
        'Inability to have sexual relations',
        'Nausea or vomiting with exertion',
        'Lightheadedness or faintness',
        'Other',
      ]),
    ],
  },
  {
    introduction: {
      title: 'The Women Stuff:',
      description: `
        Did you know that if you had complications with pregnancy that you are at greater risk of heart disease? These “adverse outcomes of pregnancy” can increase your risk of heart disease later in life.  
        <br /><br />And of course, we need to talk about menopause. Going into menopause at an earlier age, and even having significant symptoms impacts your overall heart health. Tell us where you are at in your hormonal journey.       
      `,
    },
    questions: [
      mapQuestion('q_801', OptionTypes.Checkbox, 'OB/GYN History', [
        'History of miscarriage',
        'Premature birth (less than 35 weeks)',
        'Polycystic ovarian syndrome',
        'Gestational Diabetes',
        'Elevated sugars during pregnancy',
        'Preeclampsia/Elevated blood pressure in pregnancy',
        'Placenta Previa',
      ]),
      mapQuestion(
        'q_802',
        OptionTypes.RadioSquare,
        '<span class="text-[27px]">Menopause</span><br><br>Answer the following questions if you have gone through menopause:<br><br>At what age did you undergo menopause.',
        ['<45yrs.', '>=45yrs.']
      ),
      mapQuestion('q_803', OptionTypes.Radio, 'Are you on Hormone replacement Therapy', ['Yes', 'No']),
      mapQuestion('q_804', OptionTypes.RadioSquare, 'If yes: was it started', ['within 10 years after menopause?', '>10yrs after menopause', 'Oral?', 'Patch?', 'Cream?']),
      mapQuestion('q_805', OptionTypes.Checkbox, 'Are you experiencing any symptoms?  Check all that apply', [
        'Hot Flashes',
        'Inability to sleep',
        'Moodiness/Irritability',
        'Forgetfulness or cognitive changes',
        'Night Sweats',
        'Insomnia',
      ]),
    ],
  },
  {
    introduction: {
      title: 'Your Family History:',
      description: `Remember, 80% of the time heart disease is preventable, but we have to start early, especially when you have a family history of heart disease. Let’s figure out how your family’s heart history may affect your own.`,
    },
    questions: [
      mapQuestion('q_901', OptionTypes.Radio, 'Family History of Heart Disease (check all that apply to a parent, sibling or grandparent):<br><br> Heart Attack:', ['Yes', 'No']),
      mapQuestion(
        'q_902',
        OptionTypes.Checkbox,
        'If yes, at what age were they diagnosed:',
        ['Mother <65yrs.', 'Mother >=65yrs.', 'Father <65yrs.', 'Father >=65yrs.', 'Sibling', 'Grandparent'],
        false,
        { name: 'q_901', value: '0' }
      ),
      mapQuestion('q_903', OptionTypes.Radio, 'Stroke:', ['Yes', 'No']),
      mapQuestion(
        'q_904',
        OptionTypes.Checkbox,
        'If yes, at what age were they diagnosed:',
        ['Mother <65yrs.', 'Mother >=65yrs.', 'Father <65yrs.', 'Father >=65yrs.', 'Sibling', 'Grandparent'],
        false,
        { name: 'q_903', value: '0' }
      ),
      mapQuestion('q_905', OptionTypes.Checkbox, undefined, ['Mother <65yrs.', 'Mother >=65yrs.', 'Father <65yrs.', 'Father >=65yrs.', 'Sibling', 'Grandparent']),

      mapQuestion('q_906', OptionTypes.Radio, 'Sudden cardiac death', ['Yes', 'No']),
      mapQuestion('q_907', OptionTypes.Radio, 'Aortic aneurysm', ['Yes', 'No']),
      mapQuestion('q_908', OptionTypes.Radio, 'Atrial Fibrillation', ['Yes', 'No']),
      mapQuestion('q_909', OptionTypes.Radio, 'Genetic hypercholesterolemia', ['Yes', 'No']),
    ],
  },
]

export function getHearscoreQuizzes(params?: any): Results<QuizzesData[]> {
  const dataReturn: Results<QuizzesData[]> = {
    error: false,
    success: true,
    data: dummyDataQuizzes,
    errorMessage: undefined,
  }

  return dataReturn
}
