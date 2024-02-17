const getDigimon = async () => {
    const promise = await fetch('https://digimon-api.vercel.app/api/digimon/name/agumon');
    const data = await promise.json();
    // console.log(data[0]);
    return data[0];
}

export { getDigimon }