const handleCopyClick = async ( text ) => {
    try {
        await navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    } catch (err) {
        alert("Copy to clipboard failed.");
        return err ; 
        
    }
};

export default handleCopyClick  ; 