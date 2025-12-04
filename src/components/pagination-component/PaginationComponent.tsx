import {useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({page: '1'});
    let currentPage = Number (searchParams.get('page') || '1');
    return (
        <div>

            {currentPage !== 1 && (
                <button
                    onClick={() => {
                        if (currentPage > 1) {
                            setSearchParams({page: String(currentPage - 1)});
                        }
                    }}
                >
                    prev 30 users
                </button>
            )}
            {currentPage !== 7 && (
            <button
                onClick={() => {
                    if (currentPage < 7) {
                        setSearchParams({page: String(currentPage + 1)});
                    }
                }}
            >
                next 30 users
            </button>
                )}
        </div>

    );
};
