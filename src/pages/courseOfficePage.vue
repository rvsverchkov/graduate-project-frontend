<template>
    <div class="course__container">
        <div class="course__theory" v-if="showTheory">
            <p class="course__title">Как вести себя в офисе</p>
            <p class="course__paragraph">
                Подсмотреть вашу рабочую переписку могут и когда вы просто отлучились в туалет или за чаем. 
                Поэтому важно блокировать экран каждый раз, когда отходите от него. Это добавит немного мороки, 
                зато корпоративные тайны точно не попадут не в те руки.
            </p>
            <p class="course__paragraph">
                Блокировать устройство стоит, даже если вы работаете дома и посторонние к нему подойти не могут. 
                Вряд ли вы хотите, скажем, чтобы ваш ребенок послал вашему начальнику десяток двусмысленных смайликов. 
                Или чтобы проходившая по клавиатуре кошка отправила бы недописанное письмо совету директоров. Собрались 
                отойти — заблокируйте экран. Про то, что компьютер должен быть защищен паролем, мы и не говорим — это само 
                собой разумеется.
            </p>
            <p class="course__paragraph">
                Вместе с этим также не стоит и забывать о том, что в любой компании имеется некоторый перечень уровней доступа
                и данные, с которыми вы работаете, могут оказаться в обычной ситуации недоступны вашим коллегам, но если
                вы своевременно не сумеете заблокировать компьютер, то это негативно скажется на компании.
            </p>
            <p class="course__paragraph">
                Стоит также упомянуть, что помимо блокировки компьютера также не стоит делиться всеми подробностями работы
                с коллегами, не участвующими в проекте напрямую. Проще говоря, если коллега, с которым вы пошли за кофе,
                отсутствует на странице проекта в Битриксе, то не стоит обсуждать с ним все то, что происходит у вас.
                Единственным исключением является то, когда вы обращаетесь за помощью или по какому - либо вопросу, в таком
                случае это будет уместно.
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
                        <input @change="getValues(index, ind)" class="course__radio-button" :id="`${index}` + `${ind}`" type="radio" :name="index">
                        <label :for="`${index}` + `${ind}`">{{ element }}</label>
                    </div>
                </div>
            </div>
            <div class="course__button-container">
                <button @click="checkAnswers()" v-if="!showTheory" class="course__button">Проверить ответы</button>
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
    name: 'courseOfficePage',
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
            axios.get("http://localhost:3000/tests/office", { headers: authHeader() })
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
            axios.get("http://localhost:3000/answers/office", { headers: authHeader() })
                .then(response => {
                    this.resultTrust = response.data;
                    for (let i = 0; i < this.result.length; i++) {
                        if (this.resultTrust[i] === this.result[i]) {
                            this.quantityOfTrue += 1
                        }
                    }
                    this.showResults = true;
            });
        }
    },
}
</script>