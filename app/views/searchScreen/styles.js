import { StyleSheet } from 'react-native';
import { config } from '../../services/config';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: config.mainAppColor, 
        flex: 1,
    },
    subContainer: {
        marginHorizontal: 15,
    },
    scrollWrapper: {
        paddingVertical: 20,
    },
    categoryWrapper: {
        marginBottom: 10,
    },
    categoryImage: {
        width: '100%',
        height: 200,
    },
    clickToChooseCategoryText: {
        textAlign: 'center', 
        fontSize: 27, 
        fontStyle: 'italic', 
        backgroundColor: config.COLOR_WHITE,
    },
});
