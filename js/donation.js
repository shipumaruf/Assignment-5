document.getElementById('btn-nowakhali').addEventListener('click',function(){
    console.log('add donation btn')
    
    const inputNowakhali = document.getElementById('input-nowakhali').value ;
    const inputNumber = parseFloat(inputNowakhali)
    if(!inputNumber <= 0 || !isNaN(inputNumber)){
        console.log('successfully donate ')
        
    }else{
        document.getElementById('input-error').classList.remove ('hidden')
        return
       
    }
    const balanceNowakhali = document.getElementById('balance-nowakhali').innerText;
    const balanceNumber = parseFloat(balanceNowakhali)
    const topBalance = document.getElementById('top-balance').innerText;
    const topBalanceNumber = parseFloat(topBalance)
    const nowakhaliTotalDonation = balanceNumber + inputNumber
    const totalBalance = topBalanceNumber - inputNumber
    const topUpdateBalance = document.getElementById('top-balance').innerText= totalBalance
    const newBalanceNowakhali = document.getElementById('balance-nowakhali').innerText= nowakhaliTotalDonation
})

// donation for feni--------
document.getElementById('btn-feni').addEventListener('click',function(){
    const inputFeni = document.getElementById('input-feni').value
    const inputNumber = parseFloat(inputFeni)

    if(!inputNumber <= 0 || !isNaN(inputNumber)){
        console.log('successfully donate ')
        
    }else{
        document.getElementById('input-error').classList.remove ('hidden')
        return
    }
    const balanceFeni = document.getElementById('balance-feni').innerText
    const balanceNumber = parseFloat(balanceFeni)
    const topBalance = document.getElementById('top-balance').innerText;
    const topBalanceNumber = parseFloat(topBalance)
    const feniTotalDonation = inputNumber + balanceNumber
    const topNewBalance = topBalanceNumber - inputNumber
    const topNewBalanceUpdate = document.getElementById('top-balance').innerText=topNewBalance
    const feniTotalDonationUpdate = document.getElementById('balance-feni').innerText = feniTotalDonation

})