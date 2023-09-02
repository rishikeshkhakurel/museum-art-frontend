import { useFormik } from "formik";
import * as yup from 'yup';

const validationSchema = yup.object({
    thumbnail: yup
        .string()
        .required('thumbnail is required'),
    nationality: yup
        .string()
        .required('nationality is required'),
    title: yup
        .string()
        .required('Title is required'),
    artist: yup
        .string()
        .required('Artist is required'),
    url: yup
        .string()
        .required('URL is required'),
    date: yup
        .string()
        .required('Date is required'),
});

const useAddArtWork = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            artist: '',
            url: '',
            thumbnail: '',
            nationality: '',
            date: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return { formik }
}

export default useAddArtWork;