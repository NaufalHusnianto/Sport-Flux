export interface FilterProps{
    selectedCategories: {
        specialist: string[],
        rating: number[],
        location: string[]
    }
    option: string,
    handleButtonClick: (option: string | number, category: string) => void,
    category: string 
}
export interface FilterOptionProps {
    selectedCategories: (string | number)[],
    option: string | number,
    handleButtonClick: (option: string | number, category: string) => void,
    category: string 
}

