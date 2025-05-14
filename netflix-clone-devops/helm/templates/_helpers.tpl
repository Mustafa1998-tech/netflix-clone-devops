{{- define "netflix-clone.name" -}}
netflix-clone
{{- end -}}

{{- define "netflix-clone.fullname" -}}
{{ .Release.Name }}-{{ include "netflix-clone.name" . }}
{{- end -}}
