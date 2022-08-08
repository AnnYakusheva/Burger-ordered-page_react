import { useState } from 'react'

import './App.css';

function App() {

  const MEAT = [
    {id: '1', name: 'Мраморная говядина'},
    {id: '2', name: 'Свинина'},
    {id: '3', name: 'Курица'},
    {id: '4', name: 'Рыба'}
  ]

  const CHEESE = [
    {id: '1', name: 'Пармезан'},
    {id: '2', name: 'Моцарелла'},
    {id: '3', name: 'Чеддер'},
    {id: '4', name: 'Тофу'}
  ]

  const SAUCE = [
    {id: '1', name: '1000 островов'},
    {id: '2', name: 'Сырный'},
    {id: '3', name: 'Острый'},
    {id: '4', name: 'Чесночный'}
  ]

  const [meat, setMeat] = useState(MEAT[0].id)
  const [cheese, setCheese] = useState(CHEESE[0].id)
  const [sauce, setSauce] = useState(SAUCE[0].id)
  const [onion, setOnion] = useState(true)
  const [tomato, setTomato] = useState(2)
  const [cucumber, setCucumber] = useState(2)
  const [ordered, setOrdered] = useState(false)

  const handleMeat = (ev) => {
    ev.preventDefault()
    setMeat(ev.target.value)
  }

  const handleCheese = (ev) => {
    ev.preventDefault()
    setCheese(ev.target.value)
  }

  const handleSauce = (ev) => {
    ev.preventDefault()
    setSauce(ev.target.value)
  }

  const handleIncreaseCountTomatoes = (ev) => {
    ev.preventDefault()
    setTomato(prevValue => prevValue >= 5 ? 5 : prevValue +1)
  }

  const handleDecreaseCountTomatoes = (ev) => {
    ev.preventDefault()
    setTomato(prevValue => prevValue <= 0 ? 0 : prevValue -1)
  }

  const handleIncreaseCountCucumbers = (ev) => {
    ev.preventDefault()
    setCucumber(prevValue => prevValue >= 5 ? 5 : prevValue +1)
  }

  const handleDecreaseCountCucumbers = (ev) => {
    ev.preventDefault()
    setCucumber(prevValue => prevValue <= 0 ? 0 : prevValue -1)
  }

  const handleOnionChange = () => {
    setOnion(!onion)
  }

  const handleSubmitButton = () => {
    setOrdered(!ordered)
  }

  return (
    <div className="App">
      <section>
        <div className='form-app'>
          {!ordered && <form className='form-app__form'>
            <h2>Заполните свои данные</h2>
            <div className='contact-information'>
              <div className='field-input'> 
                <p>Имя</p>
                <input type='text'></input>
              </div>
              <div className='field-input'> 
                <p>Электронная почта</p>
                <input type='text'></input>
              </div>
              <div className='field-input'> 
                <p>Телефон</p>
                <input type='text'></input>
              </div>
            </div>
            <div className='selection'>
              <div className='field-input'>
                <p className='selection__text'>Выбор котлеты:</p>
                <select onChange={handleMeat}>
                  {MEAT.map(elem => 
                  <option key={elem.id} value={elem.id}>{elem.name}</option>)}
                </select>
              </div>
              <div className='field-input'>
                <p className='selection__text'>Выбор сыра:</p>
                <select onChange={handleCheese}>
                  {CHEESE.map(elem => 
                  <option key={elem.id} value={elem.id}>{elem.name}</option>)}
                </select>
              </div>
              <div className='field-input'>
                <p className='selection__text'>Выбор соуса:</p>
                <select onChange={handleSauce}>
                  {SAUCE.map(elem => 
                  <option key={elem.id} value={elem.id}>{elem.name}</option>)}
                </select>
              </div>
              <div className='field-input'>
                <p className='selection__text'>Лук:</p>
                <div className='selection__container'>
                    <input type="checkbox" value checked={onion} onChange={handleOnionChange} />
                </div>
              </div>
              <div className='field-input'>
                <p className='selection__text'>Помидоры:</p>
                <div className='number'>
                  <button className='number-minus' onClick={handleDecreaseCountTomatoes}>-</button>
                  <input type="number" value={tomato} readOnly />
                  <button className='number-plus' onClick={handleIncreaseCountTomatoes}>+</button>
                </div>
              </div>
              <div className='field-input'>
                <p className='selection__text'>Огурцы:</p>
                <div className='number'>
                  <button className='number-minus' onClick={handleDecreaseCountCucumbers}>-</button>
                  <input type="number" value={cucumber} readOnly />
                  <button className='number-plus' onClick={handleIncreaseCountCucumbers}>+</button>
                </div>
              </div>
              <div className='form-buttons'>
                <button className='submit' type="submit" onClick={handleSubmitButton}>Сформировать заказ</button>
                <button className='submit' type="submit" onClick={handleSubmitButton}>Сбросить заказ</button>
              </div>
            </div>
          </form>}

          {ordered && <div className='modal-window'>
            <h2>Ваш бургер готовится</h2>
            <p>Котлета: {MEAT.find(elem => elem.id === meat)?.name}</p>
            <p>Сыр: {CHEESE.find(elem => elem.id === cheese)?.name}</p>
            <p>Соус: {SAUCE.find(elem => elem.id === sauce)?.name}</p>
            <p>Лук: {onion ? 'Есть' : 'Нет'}</p>
            <p>Помидоры: {tomato}</p>
            <p>Огурцы: {cucumber}</p>
            <button className='submit' onClick={handleSubmitButton}>Назад</button>
          </div>}

        </div>
      </section>
    </div>
  );
}

export default App;
