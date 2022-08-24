export const ValidateFormHelper = (model) => {
    const keys = Object.keys(model);  
    for (let i in keys) {
        if (keys[i] === 'id') continue;
        const el = document.getElementById(keys[i]);
        if (el.required && !el.value) return false;        
    }
    return true;
}
