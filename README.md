# OVERVIEW

Before you start make sure you have Docker and Docker Compose installed.

To see the API draft run the `draft_up.command` script if you are using Mac OS X (just click on it :-)). It will start three containers: API mock server, Swagger UI API Console server, ReDoc static API doc server. See the `docker-compose.yaml` file for more details. Note that you can run the individual components separately if you prefer.

You can access the static docs by going to `http://localhost:8888` and you can access the API console by going to `http://localhost:8080`.

Run the `draft_down.command` script when you are done with the API draft. It will remove the containers created by the `draft_up.command` script.

If you want to use/edit the draft locally you need to have node.js installed and
you need to install the Swagger Node module (`npm install -g swagger`) 
along with the `draft` package dependencies (`cd draft && npm install`).

You can validate your OpenAPI/Swagger spec with Prism by running the `validate.command` script. You can run the Prism container directly. Prism is a good option if the Swagger Node tool doesn't tell you enough about the problems with your spec.

# API DRAFT

API spec location: `draft/api/swagger/swagger.yaml`.

You can find sample curl-based API calls in `api_call_examples.json`. The Swagger UI API Console also provides curl-based call examples.

# TOOLS

* [Swagger Node](https://github.com/swagger-api/swagger-node) - API designer with mocking.
* [Swagger Editor](https://github.com/swagger-api/swagger-editor) - OpenAPI/Swagger spec editor.
* [Swagger UI](https://github.com/swagger-api/swagger-ui) - API Console for OpenAPI/Swagger.
* [ReDoc](https://github.com/Rebilly/ReDoc) - Stripe-like static docs for OpenAPI/Swagger.
* [Prims](https://github.com/stoplightio/prism) - OpenAPI/Swagger validation, mocking, etc.
