document.getElementById('btn-nowakhali').addEventListener('click',function(){
    console.log('add donation btn')
    
    const inputNowakhali = document.getElementById('input-nowakhali').value ;
    const inputNumber = parseFloat(inputNowakhali)
    if(inputNumber <= 0 || isNaN(inputNumber)){
        alert('invalid input')

        return;
    }else{
        
        alert('successful')
        
    }
    const balanceNowakhali = document.getElementById('balance-nowakhali').innerText;
    const balanceNumber = parseFloat(balanceNowakhali)
    const topBalance = document.getElementById('top-balance').innerText;
    const topBalanceNumber = parseFloat(topBalance)
    const nowakhaliTotalDonation = balanceNumber + inputNumber
    const totalBalance = topBalanceNumber - inputNumber
    const topUpdateBalance = document.getElementById('top-balance').innerText= totalBalance
    const newBalanceNowakhali = document.getElementById('balance-nowakhali').innerText= nowakhaliTotalDonation

    const p = document.createElement('p')
    p.innerText= `${nowakhaliTotalDonation}Taka is Donated for famine-2024 at nowakhali, Bangladesh`
    document.getElementById('history-nowakhali').appendChild(p)
    const p3 = document.createElement('p')
    p3.innerText= `${new Date().toLocaleDateString()}`
    document.getElementById('history-nowakhali').appendChild(p3)
    const p2 = document.createElement('p')
    p2.innerText= `${new Date().toLocaleTimeString()}`
    document.getElementById('history-nowakhali').appendChild(p2)
})

// donation for feni--------
document.getElementById('btn-feni').addEventListener('click',function(){
    const inputFeni = document.getElementById('input-feni').value
    const inputNumber = parseFloat(inputFeni)

    if(inputNumber <= 0 || isNaN(inputNumber)){
        alert('invalid input')

        return;
    }else{
        
        alert('successful')
        
    }
    const balanceFeni = document.getElementById('balance-feni').innerText
    const balanceNumber = parseFloat(balanceFeni)
    const topBalance = document.getElementById('top-balance').innerText;
    const topBalanceNumber = parseFloat(topBalance)
    const feniTotalDonation = inputNumber + balanceNumber
    const topNewBalance = topBalanceNumber - inputNumber
    const topNewBalanceUpdate = document.getElementById('top-balance').innerText=topNewBalance
    const feniTotalDonationUpdate = document.getElementById('balance-feni').innerText = feniTotalDonation

    const p = document.createElement('p')
    p.innerText= `${feniTotalDonation}Taka is Donated for famine-2024 at feni, Bangladesh`
    document.getElementById('history-feni').appendChild(p)
    const p3 = document.createElement('p')
    p3.innerText= `${new Date().toLocaleDateString()}`
    document.getElementById('history-feni').appendChild(p3)
    const p2 = document.createElement('p')
    p2.innerText= `${new Date().toLocaleTimeString()}`
    document.getElementById('history-feni').appendChild(p2)

})

// quota movement------------>
document.getElementById('btn-quota').addEventListener('click',function(){
    const inputQuota = document.getElementById('input-quota').value;
    const inputNumber = parseFloat(inputQuota)
    

    if(inputNumber <= 0 || isNaN(inputNumber)){
        alert('invalid input')

        return;
    }else{
        
        alert('successful')
        
    }
    const balanceQuota = document.getElementById('balance-quota').innerText;
    const balanceNumber = parseFloat(balanceQuota)
    const topBalance = document.getElementById('top-balance').innerText;
    const topBalanceNumber = parseFloat(topBalance);
    const quotaTotalDonation = balanceNumber + inputNumber;
    const topNewBalance = topBalanceNumber - inputNumber
    const quotaTotalDonationUpdate = document.getElementById('balance-quota').innerText=quotaTotalDonation
    const topNewBalanceUpdate = document.getElementById('top-balance').innerText=topNewBalance

    const p = document.createElement('p')
    p.innerText= `${quotaTotalDonation}Taka is Donated for quota-2024 at quota, Bangladesh `
    document.getElementById('history-quota').appendChild(p)
    const p3 = document.createElement('p')
    p3.innerText= `${new Date().toLocaleDateString()}`
    document.getElementById('history-quota').appendChild(p3)
    const p2 = document.createElement('p')
    p2.innerText= `${new Date().toLocaleTimeString()}`
    document.getElementById('history-quota').appendChild(p2)
    
})
// button toggle start----->

document.getElementById('history-btn').addEventListener('click',function(){
    const historyButton= document.getElementById('history-btn').classList.add('btn-donation')
    const donationButton = document.getElementById('donation-btn').classList.remove('btn-donation')
    const nowakhaliSection = document.getElementById('nowakhali-section').classList.add('hidden')
    const feniSection = document.getElementById('feni-section').classList.add('hidden')
    const quotaSection = document.getElementById('quota-section').classList.add('hidden')
    const historySection = document.getElementById('history-section').classList.remove('hidden')
})

document.getElementById('donation-btn').addEventListener('click',function(){
    const historyButton= document.getElementById('history-btn').classList.remove('btn-donation')
    const donationButton = document.getElementById('donation-btn').classList.add('btn-donation')
    const nowakhaliSection = document.getElementById('nowakhali-section').classList.remove('hidden')
    const feniSection = document.getElementById('feni-section').classList.remove('hidden')
    const quotaSection = document.getElementById('quota-section').classList.remove('hidden') 
    const historySection = document.getElementById('history-section').classList.add('hidden')
})
// button toggle end----->

// blog button start ----->
document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href='/home.html'
})

// home button start ------>
