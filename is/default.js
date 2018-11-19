ver number = Math.floor(Math.random()*3);
ver answer = parseInt(window.prompt('数あてゲーム。０～２の数字を入力してください'));

ver message;
if(answer === number){
    message = 'あたり';
}else if (answer < number){
    message = 'もっと大きいです';
}else if (answer > number){
    message = 'もっと小さいです';
}else{
    message = '０～３の数字を入力してください';
}

document.getElementById('choice').textContent = message;
