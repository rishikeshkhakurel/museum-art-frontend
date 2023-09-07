import { useFormik } from "formik";
import * as yup from 'yup';
import { useAddArtistMutation, useEditArtistMutation, useGetArtistbyIdQuery } from "../../../redux/services/artist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changingLoadingStatus } from "../../../redux/slices/loading";
import { useParams } from "react-router-dom";

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
    endDate: yup
        .string()
        .required('End Date is required'),
});

const useAddArtist = () => {
    const [addArtistReq, addArtistRes] = useAddArtistMutation();
    const [editArtistReq, editArtistRes] = useEditArtistMutation();
    let { artistId } = useParams();
    const edit = artistId ? true : false
    const getArtist = useGetArtistbyIdQuery(artistId, {
        skip: !artistId,
    });
    const dispatch = useDispatch();
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
            if (edit) {
                editArtistReq(values);
            } else {
                addArtistReq(values);
            }
        },
    });
    useEffect(() => {
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
    }, [addArtistRes])

    useEffect(() => {
        if (editArtistRes?.isSuccess) {
            dispatch(changingLoadingStatus(false));
        }
        if (editArtistRes?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
        if (editArtistRes?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    }, [editArtistRes])


    //get artist by ID
    useEffect(() => {
        if (getArtist?.isSuccess) {
            dispatch(changingLoadingStatus(false));
            const data = getArtist?.data;
            formik.setValues({
                '_id': data?._id,
                'constituentID': data?.ConstituentID,
                'artistBio': data?.ArtistBio,
                'displayName': data?.DisplayName,
                'endDate': data?.EndDate,
                'gender': data?.Gender,
                'nationality': data?.Nationality,
                'beginDate': data?.BeginDate,
            })
        }
        if (getArtist?.isLoading) {
            dispatch(changingLoadingStatus(true));
        }
        if (getArtist?.isError) {
            dispatch(changingLoadingStatus(false));
        }
    }, [getArtist])

    return { formik, addArtistRes, edit, editArtistRes }
}

export default useAddArtist;