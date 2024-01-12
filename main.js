const addBtn = document.querySelector('.btn');
const itemList = document.querySelector('.item-list');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');
const overlay = document.querySelector('.overlay')
const completeItems = document.querySelector('.complete-items')
const messageBtn = document.querySelector('.header button');
const messages = document.querySelector('.messages');
const message = document.createElement('div');

let editable = false;
let open = false;
let jarodAnswer = '';


function createItem(){
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const summary = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const edit = document.createElement('button');
    const remove = document.createElement('button');
    const complete = document.createElement('button');
    const undo = document.createElement('button');
    const editFinish = document.createElement('button');
    const editUndo = document.createElement('button');
    const editButtonGroup = document.createElement('div');

    const inputTitle = document.querySelector('.title').value;
    const inputSummary = document.querySelector('.summary').value;

    card.appendChild(title)
    card.appendChild(summary)
    buttonGroup.appendChild(remove)
    buttonGroup.appendChild(edit)
    buttonGroup.appendChild(complete)
    card.appendChild(buttonGroup)
    editButtonGroup.appendChild(editUndo)
    editButtonGroup.appendChild(editFinish)
    
    itemList.appendChild(card)

    card.classList.add('card')
    title.classList.add('title')
    summary.classList.add('description')
    edit.classList.add('edit')
    remove.classList.add('remove')
    complete.classList.add('complete')
    buttonGroup.classList.add('btn-container')
    undo.classList.add('undo');
    editFinish.classList.add('complete');
    editUndo.classList.add('undo');
    editButtonGroup.classList.add('btn-container')

    
    title.textContent = inputTitle;
    summary.textContent = inputSummary;
    edit.innerHTML = '<img src="icons/pencil.svg" width="20px" />'
    remove.innerHTML = '<img src="icons/close.png" width="20px" />'
    complete.innerHTML = '<img src="icons/check-mark.png" width="25px" />'
    editFinish.innerHTML = '<img src="icons/check-mark.png" width="25px" />'
    undo.innerHTML = '<img src="icons/undo.svg" width="20px" />'
    editUndo.innerHTML = '<img src="icons/undo.svg" width="20px" />'

    document.querySelector('.title').value = '';
    document.querySelector('.summary').value = '';

    remove.addEventListener('click', () =>{
        card.classList.add('hidden')
        setTimeout(()=>{
            itemList.removeChild(card)
        }, 200)
        
    })

    edit.addEventListener('click', () =>{
        title.contentEditable = true;
        summary.contentEditable = true;
        editUndo.style.backgroundColor = '#bdc5d2'
        card.removeChild(buttonGroup)
        card.appendChild(editButtonGroup)
    })
    editUndo.addEventListener('click', () =>{
        document.execCommand('undo', false, null);
    })
    editFinish.addEventListener('click', () => {
        title.contentEditable = false;
        summary.contentEditable = false;
        card.removeChild(editButtonGroup);
        card.appendChild(buttonGroup)
        editable = false;
    })


    complete.addEventListener('click', () =>{
        itemList.removeChild(card);
        completeItems.appendChild(card);
        card.removeChild(buttonGroup)
        card.style.backgroundColor = '#8dee97'
        undo.style.backgroundColor = '#8dee97'
        card.appendChild(undo);
    })
    undo.addEventListener('click', ()=>{
        completeItems.removeChild(card);
        itemList.appendChild(card);
        card.appendChild(buttonGroup);
        card.style.backgroundColor = '#bdc5d2'
        card.removeChild(undo);
    })
}

function askForm(){
    form.classList.add('active');
    overlay.classList.add('active');
}

function closeForm(){
    form.classList.remove('active');
    overlay.classList.remove('active');
}

function openMessages(){
    messages.classList.add('active');
    overlay.classList.add('active');
    open = true;
}

function closeMessages(){
    messages.classList.remove('active');
    overlay.classList.remove('active');
    open = false;
}

function createMessage(){
    message.classList.add('message')
    messages.appendChild(message);
}

function sendMessage(userName){
    if (userName === 'Jarod' || userName === 'jarod'){
            createMessage();
            message.innerHTML = 'Hello Jarod :D'
        setTimeout(()=>{
            message.innerHTML = 'I\'m gonna give you some questions, you better answer them right'
            setTimeout(()=>{
                jarodAnswer = prompt('What\'s the best sniper on OG MW2')
                if (jarodAnswer === 'Intervention' || jarodAnswer === 'intervention'){
                    message.innerHTML = 'okay beginners luck'
                    setTimeout(()=>{
                        jarodAnswer = prompt('What game did we grind while we were at sissy\'s first apartment')
                        if (jarodAnswer === '7 days to die' || jarodAnswer === '7 Days to Die'){
                            message.innerHTML = 'fine you got me'
                            setimeout(()=>{
                                jarodAnswer = prompt('Whose your best bro')
                                if (jarodAnswer === 'Kolby' || jarodAnswer === 'you'|| jarodAnswer === 'kolby'){
                                    message.innerHTML = 'Yessirrrr'
                                    setTimeout(()=>{
                                        message.innerHTML = 'I love ya bro keep the spirits high we on the come up'
                                        setTimeout(()=>{
                                            closeMessages();
                                        }, 5000)
                                    }, 3000)
                                }
                                else{
                                    message.innerHTML = 'Wrong, Refresh'
                                }
                            }, 2000)
                        }
                        else{
                            message.innerHTML = 'Wrong, Refresh'
                        }
                    }, 2000)
                }
                else{
                    message.innerHTML = 'Wrong, Refresh'
                }
                
            }, 2000)
        }, 2000)
    
    }
    if (userName === 'Zachary' || userName === 'zachary' || userName === 'Zack'|| userName === 'zack'){
        setTimeout(()=>{
            createMessage();
            message.textContent = 'hello zack'
            prompt('')
        }, 10000)
    }
}

messageBtn.addEventListener('click', ()=>{
    
    if (open === false){
        openMessages()
        sendMessage(userName)
    }
    else{
        closeMessages();
    }
})

addBtn.addEventListener('click', () => {
    askForm();
});


form.addEventListener('submit', function(e){
    e.preventDefault();
    createItem();
    closeForm();
})

setTimeout(()=>{
    const userName = prompt('What\'s your name?')
}, 5000)