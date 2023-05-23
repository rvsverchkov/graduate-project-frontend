<template>
    <div class="course__container">
        <div class="course__theory" v-if="showTheory">
            <p class="course__title">Все, что нужно знать о корпоративной почте</p>
            <p class="course__paragraph">
                Корпоративная почта является ни чуть не менее значимым инструментом, чем Битрикс24, используемый в нашей
                компании, а во многом даже более важным...
            </p>
            <p class="course__paragraph">
                С помощью почты следует отправлять сообщения коллегам со срочными просьбами и отправлять конфиденциальную информацию,
                которая требуется в работе. Ни в коем случае не стоит переходить в сторонние мессенджеры и уж тем более размещать
                файлы в обыкновенных файлообменниках.
            </p>
            <p class="course__paragraph">
                Также не стоит отправлять с корпоративной почты сообщения пользователям, не являющимися сотрудниками компании,
                поскольку учитывая строго конфиденциальные данные, находящиеся в почте, является нецелесообразным демонтрировать
                логин кому - либо. Ведь никто не застрахован от подбора пароля и тем более рассылки спама.
            </p>
            <p class="course__paragraph">
                В силу того, что подбор пароля может затронуть кого угодно, стоит озаботиться тем, чтобы при создании почты
                был указан достаточно стойкий к полному перебору пароль, а именно содержащий хотя бы 10 символов, в том числе
                цифр и букв английского алфавита.
            </p>
            <p class="course__paragraph">
                Помимо сложного пароля также не стоит предоставлять доступ к своей почте другим сотрудникам ни под каким
                предлогом, поскольку за действия совершенные от вашего лица будете отвечать исключительно вы, если конечно
                это не будет результатом взлома.
            </p>
        </div>
        <div class="course__button-container">
            <button @click="showTests()" v-if="showTheory" class="course__button">Пройти тест</button>
        </div>
        <div class="course__test" v-if="!showTheory">
            <p class="course__test-title">Узнайте, как вы усвоили материал курса</p>
            <div class="course__questions">
                <div class="course__question-container" v-for="(item, index) in this.questionsArray" :key="index">
                    <p class="">{{ item.question }}</p>
                    <div class="" v-for="(element, ind) in item.answers" :key="ind">
                        <input :disabled="showResults" @change="getValues(index, ind)" class="course__radio-button" :id="`${index}` + `${ind}`" type="radio" :name="index">
                        <label :for="`${index}` + `${ind}`">{{ element }}</label>
                    </div>
                </div>
            </div>
            <div class="course__button-container">
                <button @click="checkAnswers()" v-if="!showTheory" :disabled="showResults" class="course__button">Проверить ответы</button>
            </div>
            <div class="course__results" v-if="showResults">
                <p class="course__results-title">
                    Вы правильно ответили на {{ quantityOfTrue }} из {{ quantityOfAnswers }} вопросов
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import authHeader from '@/services/auth-header';

export default {
    name: 'courseEmailPage',
    data() {
        return {
            showTheory: true,
            questionsArray: [],
            quantityOfAnswers: 0,
            answersArray: [],
            showResults: false,
            result: new Array(),
            resultTrust: new Array(),
            quantityOfTrue: 0
        }
    },
    methods: {
        showTests() {
            this.showTheory = false
            axios.get("https://rvsverchkov-backend.ru/tests/email", { headers: authHeader() })
                .then(response => {
                    this.questionsArray = response.data[0].questions
                    this.quantityOfAnswers = this.questionsArray.length
                    for (let i = 0; i < this.quantityOfAnswers; i++) {
                        this.answersArray.push({
                            "answer": undefined
                        });
                    }
            });
        },
        getValues(index, newAnswer) {
            if (this.answersArray[index].answer === undefined || this.answersArray[index].answer !== newAnswer) {
                this.answersArray[index].answer = newAnswer;
            }
        },
        checkAnswers() {
            for (let i = 0; i < this.answersArray.length; i++) {
                this.result.push(this.answersArray[i].answer);
            }
            axios.get("https://rvsverchkov-backend.ru/answers/email", { headers: authHeader() })
                .then(response => {
                    this.resultTrust = response.data;
                    for (let i = 0; i < this.result.length; i++) {
                        if (this.resultTrust[i] === this.result[i]) {
                            this.quantityOfTrue += 1
                        }
                    }
                    this.showResults = true;
                    axios.patch("https://rvsverchkov-backend.ru/users/me/email", { userValue: this.quantityOfTrue }, {
                        headers: authHeader()
                    })
                    .then(response => {
                        console.log('123')
                        console.log(response)
                    })
            });
        }
    },
}
</script>