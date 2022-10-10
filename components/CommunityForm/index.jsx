import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import Input from "../Input";
import { useEffect } from "react";

const INITIAL_FORM_DATA = {
  firstName: "",
  email: "",
  gitHubLink: "",
  note: "",
};

const INITIAL_FORM_ERRORS = {
  firstName: false,
  email: {
    error: false,
    message: null,
  },
  gitHubLink: false,
  note: false,
};

const checkURLRegex =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;

function isRegexValid(url, regex) {
  const result = url.match(regex) ? true : false;
  return result;
}

const JOIN_COMMUNITY = gql`
  mutation ($data: CommunityRequestInput!) {
    createCommunityRequest(data: $data) {
      data {
        id
        attributes {
          firstName
          email
          gitHubLink
          isMember
          note
        }
      }
    }
  }
`;

export default function CommunityForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [formError, setFormError] = useState(INITIAL_FORM_ERRORS);
  const [JoinCommunity, { data, error, loading }] = useMutation(JOIN_COMMUNITY);

  // TODO: Probably a better way to do this
  useEffect(() => {
    if (error?.message === "This attribute must be unique") {
      setFormError((prev) => ({
        ...prev,
        email: {
          error: true,
          message: "This email has already been used.",
        },
      }));
    }
  }, [error]);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function validateGeneric(text, name) {
    if (text.length === 0) {
      setFormError((prevState) => ({
        ...prevState,
        [name]: {
          error: true,
          message: "This field is required.",
        },
      }));
      return true;
    } else {
      setFormError((prevState) => ({
        ...prevState,
        [name]: {
          error: false,
          message: null,
        },
      }));
      return false;
    }
  }

  function validateEmail(email) {
    if (!isRegexValid(email, checkURLRegex)) {
      setFormError((prevState) => ({
        ...prevState,
        email: {
          error: true,
          message: "Please enter a valid email.",
        },
      }));
      return true;
    } else {
      setFormError((prevState) => ({
        ...prevState,
        email: {
          error: false,
          message: "",
        },
      }));
      return false;
    }
  }

  function validateUrl(url) {
    if (!isRegexValid(url, checkURLRegex)) {
      setFormError((prevState) => ({ ...prevState, gitHubLink: true }));
      return true;
    } else {
      setFormError((prevState) => ({ ...prevState, gitHubLink: false }));
      return false;
    }
  }

  function formValidation(formData) {
    let hasError = false;
    hasError = validateGeneric(formData.firstName, "firstName") ? true : false;
    hasError = validateUrl(formData.gitHubLink, "gitHubLink") ? true : false;
    hasError = validateEmail(formData.email) ? true : false;
    return hasError;
  }

  function hadleFormSubmit(event) {
    event.preventDefault();
    const hasErrors = formValidation(formData);

    if (!hasErrors) {
      JoinCommunity({
        variables: {
          data: {
            email: formData.email,
            firstName: formData.firstName,
            gitHubLink: formData.gitHubLink,
            note: formData.note || null,
          },
        },
      });
      alert("Form submitted successfully");
    }
  }

  return (
    <form
      className="bg-base-100 rounded-xl m-6 px-8 pt-6 pb-8 mb-4"
      method="post"
      encType="multipart/form-data"
    >
      <h2 className="text-primary font-medium">Join Our Cirlce Community</h2>

      <p className="text-accent my-2">
        It's free to join, just want to know you are serious about learning, so
        please share a link to your GitHub.
      </p>

      <fieldset disabled={loading}>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Enter your first name"
          label="First Name"
          onChange={handleInputChange}
          onBlur={(e) => validateGeneric(e.target.value, "firstName")}
          value={formData.firstName}
          error={formError.firstName.error && formError.firstName.message}
        />

        <Input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          label="Email"
          onChange={handleInputChange}
          onBlur={(e) => validateEmail(e.target.value, "email")}
          value={formData.email}
          error={formError.email.error && formError.email.message}
        />

        <Input
          id="gitHubLink"
          name="gitHubLink"
          type="text"
          placeholder="Enter your github link"
          label="GitHub Link"
          onChange={handleInputChange}
          onBlur={(e) => validateUrl(e.target.value, "gitHubLink")}
          value={formData.gitHubLink}
          error={formError.gitHubLink && "Please provide a valid URL"}
        />

        <div className="mb-6">
          <label
            className="block text-secondary text-sm font-bold mb-2"
            htmlFor="note"
          >
            Note [optional]
          </label>
          <textarea
            id="note"
            name="note"
            className="input bg-base-200 text-primary focus:outline-none focus:border-secondary w-full"
            onChange={handleInputChange}
            onBlur={(e) => validateGeneric(e.target.value, "note")}
            value={formData.note}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="btn btn-primary"
            type="submit"
            value="Submit"
            onClick={hadleFormSubmit}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </fieldset>
    </form>
  );
}
