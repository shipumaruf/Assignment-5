document.getElementById('btn-nowakhali').addEventListener('click',function(){
    console.log('add donation btn')
    
    const inputNowakhali = document.getElementById('input-nowakhali').value ;
    const inputNumber = parseFloat(inputNowakhali)
    if(inputNumber <= 0 || isNaN(inputNumber)){
        document.getElementById('input-error').classList.remove ('hidden')
        return;
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

    if(inputNumber <= 0 || isNaN(inputNumber)){
        document.getElementById('input2-error').classList.remove('hidden')
        return ;
       
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

// quota movement------------>
document.getElementById('btn-quota').addEventListener('click',function(){
    const inputQuota = document.getElementById('input-quota').value;
    const inputNumber = parseFloat(inputQuota)
    

    if(inputNumber <= 0 || isNaN(inputNumber)){
        document.getElementById('input3-error').classList.remove('hidden')
        return;
    }
    const balanceQuota = document.getElementById('balance-quota').innerText;
    const balanceNumber = parseFloat(balanceQuota)
    const topBalance = document.getElementById('top-balance').innerText;
    const topBalanceNumber = parseFloat(topBalance);
    const quotaTotalDonation = balanceNumber + inputNumber;
    const topNewBalance = topBalanceNumber - inputNumber
    const quotaTotalDonationUpdate = document.getElementById('balance-quota').innerText=quotaTotalDonation
    const topNewBalanceUpdate = document.getElementById('top-balance').innerText=topNewBalance
    
})

document.getElementById('history-btn').addEventListener('click',function(){
    const nowakhaliSection = document.getElementById('nowakhali-section').classList.add('hidden')
    const feniSection = document.getElementById('feni-section').classList.add('hidden')
    const quotaSection = document.getElementById('quota-section').classList.add('hidden')
})

document.getElementById('donation-btn').addEventListener('click',function(){
    const nowakhaliSection = document.getElementById('nowakhali-section').classList.remove('hidden')
    const feniSection = document.getElementById('feni-section').classList.remove('hidden')
    const quotaSection = document.getElementById('quota-section').classList.remove('hidden') 
})