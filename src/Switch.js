export function renderSwitch(param) {
    switch (param) {
        case 'Clear':
        case 'Sunny':
            return 'app sunny';
        case 'Clouds':
            return 'app cloud';
        case 'Rain':
            return 'app rain';
        case 'Snow':
            return 'app snow';
        case 'Haze':
            return 'app warm';
        default:
            return 'app';
    }
}

// export default renderSwitch;