bucket                      = "web-terraform-states"
key                         = "ci-cd-example.tfstate"
region                      = "us-west-1"
encrypt                     = true
dynamodb_table              = "terraform-locks"