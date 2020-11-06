import { connect } from 'react-redux';
import { getCategoriesAction, selectCategory } from '../actions/categories'
import Sidebar from '../components/Sidebar';

const mapStateToProps = (state: any) => {
    return {
        categories: state.categories.categories
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCategories: () => dispatch(getCategoriesAction()),
        selectCategory: (categoryId: number) => dispatch(selectCategory(categoryId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
