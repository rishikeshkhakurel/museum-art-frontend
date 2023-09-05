import { useFormik } from "formik";
import * as yup from 'yup';
import { useAddArtistMutation } from "../../../redux/services/artist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changingLoadingStatus } from "../../../redux/slices/loading";

const validationSchema = yup.object({
    displayName: yup
        .string()
        .required('Display Name is required'),
    artistBio: yup
        .string()
        .required('Artist Bio is required'),
    nationality: yup
        .string()
        .required('Nationality is required'),
    gender: yup
        .string()
        .required('Gender is required'),
    beginDate: yup
        .string()
        .required('Begin Date is required'),
    enddate: yup
        .string()
        .required('End Date is required'),
});

const useAddArtist = () => {
    const [addArtistReq, addArtistRes]=useAddArtistMutation();
    const dispatch= useDispatch();
    const formik = useFormik({
        initialValues: {
            displayName: '',
            artistBio: '',
            nationality: '',
            gender: '',
            beginDate: '',
            enddate: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            addArtistReq(values);
        },
    });
    useEffect(()=>{
        if (addArtistRes?.isSuccess) {
            dispatch(changingLoadingStatus(false));
            formik.resetForm();
        }
        if (addArtistRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
        if (addArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    },[addArtistRes])

    return { formik, addArtistRes }
}

export default useAddArtist;